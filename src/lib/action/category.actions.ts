'use server'

import { CreateCategoryParams } from "@/types";
import { connectToDatabase } from "../database";
import Category from "../database/models/category.model";
import { handleError } from "../utils";

export async function createCategory(category: CreateCategoryParams) {
    try {
      await connectToDatabase();
      const newCategory = await Category.create({name: category.categoryName});
      return JSON.parse(JSON.stringify(newCategory));
    } catch (error) {
      handleError(error);
    }
  }
  
export async function getAllCategories() {
    try {
      await connectToDatabase();
      const allCategories = await Category.find();
      return JSON.parse(JSON.stringify(allCategories));
    } catch (error) {
      handleError(error);
    }
  }
  