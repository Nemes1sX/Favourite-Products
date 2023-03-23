<?php

namespace App\Http\Controllers;

use App\Models\Favourite;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;
use App\Repositories\IProductRepository;

class FavouriteController extends Controller
{
    private IProductRepository $productRepository;

    public function __construct(IProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $favouriteProducts = $this->productRepository->GetUserFavouriteProducts();

        return response()->json([
            'data' => ProductResource::collection($favouriteProducts),
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $existingFavourite = Favourite::where(
            ['user_id' => auth()->id(), 'product_id' => $request->product_id])
            ->count();
        if($existingFavourite > 0) {
            return response()->json([
                'error' => 'Product is already added to favourites'
            ], 400);
        }

        Favourite::create([
            'user_id' => auth()->id(),
            'product_id' => $request->product_id
        ]);

        return response()->json([
            'message' => 'Products added to favourites'
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $favourite = Favourite::find($id);
        if(!$favourite) {
            return response()->json([
                 'message' => 'Favourite product not found'
            ], 404);
        }

        $favourite->delete();

        return response()->json([
            'message' => 'Favourite product removed'
        ], 200);
    }
}
