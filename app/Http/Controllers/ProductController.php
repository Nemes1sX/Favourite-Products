<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Repositories\IProductRepository;

class ProductController extends Controller
{
    private IProductRepository $productRepository;

    public function __construct(IProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function index()
    {
        $products = $this->productRepository->GetAllProducts();

        if ($products->count() == 0) {
           return response()->json([
               'message' => 'Products not found'
           ], 404);
        }

        return response()->json([
            'data' => ProductResource::collection($products)
        ], 200);
    }
}
