<?php

namespace App\Repositories;

use App\Models\Favourite;

class FavouriteRepository implements IFavouriteRepository
{

    function  AddProductToUserFavourites(int $productId)
    {
       return Favourite::create([
            'user_id' => auth()->id(),
            'product_id' => $productId
        ]);
    }

    function FindProductFromUserFavourites(int $favouriteId)
    {
        return Favourite::find($favouriteId);
    }

    function ExistingUserFavouriteProducts(int $productId)
    {
      return Favourite::where(
            ['user_id' => auth()->id(), 'product_id' => $productId])
            ->count();
    }
}
