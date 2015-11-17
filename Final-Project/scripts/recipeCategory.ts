class RecipeCategory extends BaseRecipeCategory implements IRecipeCategory {
    public description: string;
    examples: IExample[];

    constructor(category: IRecipeCategory) {
        super(category.name, category.foodGroups);

        this.description = category.description;
        this.examples = category.examples;
    }
} 