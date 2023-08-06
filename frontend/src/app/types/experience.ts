export interface Experience {
   id: number;
   attributes: {
      jobTitle: string;
      companyName: string;
      startDate: string;
      endDate: string | null;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      description: string;
   };
}
