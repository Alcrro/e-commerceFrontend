const rateLimit = new Map<string, { count: number; timestamp: number }>();

export function handleRateLimit(ip: string) {
  const now = Date.now();

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return null; // No rate limit exceeded
  }

  const entry = rateLimit.get(ip)!;

  // Check if within 1 minute window
  if (now - entry.timestamp < 60 * 1000) {
    if (entry.count >= 5) {
      return new Response('Too many requests', { status: 429 });
    }
    entry.count += 1;
  } else {
    rateLimit.set(ip, { count: 1, timestamp: now });
  }
  console.log(rateLimit);

  return null; // No rate limit exceeded
}
