export interface Project {
   id: number;
   attributes: ProjectAttributes;
}

export interface ProjectAttributes {
   name: string;
   description: string;
   createdAt: string;
   updatedAt: string;
   publishedAt: string;
   url_live: string;
   url_code: string;
   importance: number;
   image: {
      data: ImageData[];
   };
   technologies: {
      data: TechnologyData[];
   };
}

export interface ImageData {
   id: number;
   attributes: ImageAttributes;
}

export interface ImageFormat {
   name: string;
   hash: string;
   ext: string;
   mime: string;
   path: string | null;
   width: number;
   height: number;
   size: number;
   url: string;
}

export interface ImageAttributes {
   id: number;
   name: string;
   alternativeText: string;
   caption: string | null;
   width: number;
   height: number;
   formats: {
      thumbnail: ImageFormat;
      small: ImageFormat;
      medium: ImageFormat;
      large: ImageFormat;
   };
   hash: string;
   ext: string;
   mime: string;
   size: number;
   url: string;
   previewUrl: string | null;
   provider: string;
   provider_metadata: any | null;
   createdAt: string;
   updatedAt: string;
}

export interface TechnologyData {
   id: number;
   attributes: TechnologyAttributes;
}

export interface TechnologyAttributes {
   name: string;
   createdAt: string;
   updatedAt: string;
   publishedAt: string;
   category: string;
   importance: number;
}
