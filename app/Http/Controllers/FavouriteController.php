<?php

namespace App\Http\Controllers;

use App\Models\Favourite;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;


class FavouriteController extends Controller
{
    public function index(Request $request)
    {
        $user_id = $request->input('user_id');
        $favouriteProducts = Product::whereHas('favourites', function (Builder $query) use ($user_id) {
           $query->where('user_id', $user_id);
        })->get();

        return response()->json([
            'data' => $favouriteProducts
        ], 200);
    }
}
