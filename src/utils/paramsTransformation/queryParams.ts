export function queryParams(params: string[]) {
  let categories: string[] = [];
  let queryParams: Record<string, string[]> = {};
  let currentKey: string | null = null;

  const filteredParams = params.filter(
    (param) => param.toLowerCase() !== 'favicon.ico'
  );

  for (const param of filteredParams) {
    const decodedParam = decodeURIComponent(param);

    // If we have a key waiting for a value, assign this param as its value
    if (currentKey) {
      queryParams[currentKey] = queryParams[currentKey] || [];
      queryParams[currentKey].push(decodedParam);
      currentKey = null;
    } else {
      // Treat as key (if it’s followed by a value)
      currentKey = decodedParam === 'id' ? 'id' : decodedParam;
    }
  }

  // Anything left without a value is assumed to be a category
  if (currentKey) {
    categories.push(currentKey);
    currentKey = null;
  }

  let queryString = `/${categories.join('-')}`;
  const queryArray = Object.entries(queryParams).map(
    ([key, values]) => `${key}=${values.map(encodeURIComponent).join(',')}`
  );

  if (queryArray.length > 0) {
    queryString += `?${queryArray.join('&')}`;
  }

  return queryString;
}
