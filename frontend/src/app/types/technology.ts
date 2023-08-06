export interface Technology {
   id: number;
   attributes: TechnologyAttributes;
}

export interface TechnologyAttributes {
   id: number;
   name: string;
   createdAt: string;
   updatedAt: string;
   publishedAt: string;
   category: string;
   importance: number;
   projects: {
      data: ProjectAttributes[];
   };
   icon: IconData;
}

export interface IconData {
   data: Image;
}

export interface Image {
   id: number;
   attributes: ImageAttributes;
}

export interface ImageAttributes {
   name: string;
   alternativeText: string | null;
   caption: string | null;
   width: number;
   height: number;
   formats: null | Record<string, any>;
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

export interface ProjectAttributes {
   id: number;
   name: string;
   description: string;
   createdAt: string;
   updatedAt: string;
   publishedAt: string;
   url_live: string;
   url_code: string;
   importance: number;
}
