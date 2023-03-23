<?php

namespace App\Repositories;

use App\Models\Product;

class ProductRepository implements IProductRepository
{
    function GetAllProducts()
    {
        return Product::all();
    }

    function GetUserFavouriteProducts()
    {
        return Product::withWhereHas('favourites', function ($query)  {
            $query->where('user_id', auth()->id());
        })->get();
    }
}
