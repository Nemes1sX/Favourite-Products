<?php

namespace App\Providers;

use App\Http\Resources\FavouriteResource;
use App\Repositories\IFavouriteRepository;
use App\Repositories\IProductRepository;
use App\Repositories\ProductRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->app->bind(IProductRepository::class, ProductRepository::class);
        $this->app->bind(IFavouriteRepository::class, FavouriteResource::class);
    }
}
