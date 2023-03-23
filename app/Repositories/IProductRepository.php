<?php

namespace App\Repositories;

interface IProductRepository
{
   function GetAllProducts();
   function GetUserFavouriteProducts();
}
