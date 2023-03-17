<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Models\User::factory(10)->create();
        Models\Product::factory(20)->create();
        Models\Favourite::factory(30)->create();
    }
}
