interface ICategory {
    _id: string;
    name: string;
    parentCategoryId?: string;
}

interface CategoryTree {
    _id: string;
    name: string;
    subCategories: CategoryTree[];
}

export function buildCategoryTree(categories: any[], parentId?: string | null): CategoryTree[] {
    const categoryTree: CategoryTree[] = [];
    const filteredCategories = categories.filter(category => category?.parentCategoryId === parentId);

    for (const category of filteredCategories) {
        const subCategories = buildCategoryTree(categories, category._id);
        categoryTree.push({_id: category._id,name: category.name,subCategories: subCategories});
    }

    return categoryTree;
}