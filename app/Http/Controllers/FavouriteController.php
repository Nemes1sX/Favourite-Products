<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

class FavouriteController extends Controller
{
    public function index(Request $request)
    {
        $favouriteProducts = Product::whereHas('favourites', function (Builder $query)  {
           $query->where('user_id', auth()->id());
        })->get();

        return response()->json([
            'data' => ProductResource::collection($favouriteProducts)
        ], 200);
    }
}
