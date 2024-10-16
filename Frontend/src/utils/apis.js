export const baseUrl = "http://localhost:8800";

export const newCategoryApi = baseUrl + "/category/new";
export const allCategoriesApi = baseUrl + "/category/all";
export const categoryByIdApi = (id) => baseUrl + "/category/"+ id;

export const newDestinationApi = baseUrl + "/destination/new";
export const allDestinationsApi = baseUrl + "/destination/all";
export const destinationByIdApi = (id) => baseUrl + "/destination/"+ id;

export const newTourPackageApi = baseUrl + "/tour-package/new";
export const allTourPackagesApi = baseUrl + "/tour-package/all";
export const tourPackageByIdApi = (id) => baseUrl + "/tour-package/"+ id;


