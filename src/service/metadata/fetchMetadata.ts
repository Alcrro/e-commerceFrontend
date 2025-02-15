import { Metadata } from 'next';
import { apiService } from '../apiServiceData/apiService';

export interface IMetadata {
  _id: string;
  metadata: {
    title: string;
    description?: string;
    keywords?: string[];
    author?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    twitterCard?: string;
    canonicalUrl?: string;
    robotsMeta?: string;
    theme?: string;
    layout?: string;
    customCSS?: string;
    scripts?: string[];
    status: 'draft' | 'published';
    publishedAt?: Date;
    bannerImage?: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface IMetadataErrorFetch {
  metadata: Partial<Pick<IMetadata['metadata'], 'title' | 'bannerImage'>>;
}

export const fetchMetadata = async (
  params: string
): Promise<IApiResponse<IMetadata> | null> => {
  const result = await apiService<IMetadata>(`metadata/get-${params}`, 'GET');

  if (!result?.success) {
    return null;
  }

  return result;
};
