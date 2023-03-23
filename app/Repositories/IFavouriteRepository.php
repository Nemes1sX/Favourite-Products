<?php

namespace App\Repositories;

interface IFavouriteRepository
{
    function AddProductToUserFavourites(int $productId);
    function FindProductFromUserFavourites(int $favouriteId);
    function ExistingUserFavouriteProducts(int $productId);
}
