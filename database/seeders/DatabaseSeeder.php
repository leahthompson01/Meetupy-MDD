<?php

namespace Database\Seeders;

use App\Models\Event;
use App\Models\MeetupGroup;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        // Demo organizer — login: organizer@example.com / organizer-password
        $organizer = User::create([
            'name' => 'Demo Organizer',
            'email' => 'organizer@example.com',
            'email_verified_at' => now(),
            'password' => Hash::make('organizer-password'),
            'remember_token' => Str::random(10),
        ]);

        $userData = [
            ['name' => 'Test User',    'email' => 'test@example.com'],
            ['name' => 'Alice Martin', 'email' => 'alice@example.com'],
            ['name' => 'Bob Chen',     'email' => 'bob@example.com'],
            ['name' => 'Clara Müller', 'email' => 'clara@example.com'],
            ['name' => 'David Okafor', 'email' => 'david@example.com'],
        ];

        $users = collect($userData)->map(fn (array $data) => User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
        ]))->prepend($organizer);

        $groupData = [
            ['name' => 'Laravel Greece',    'location' => 'Athens, Greece',             'description' => 'The Greek Laravel community.'],
            ['name' => 'Laravel Denmark',   'location' => 'Copenhagen, Denmark',         'description' => 'Danish Laravel developers.'],
            ['name' => 'Laravel Germany',   'location' => 'Frankfurt am Main, Germany',  'description' => 'Laravel community in Germany.'],
            ['name' => 'Laravel Bengaluru', 'location' => 'Bengaluru, India',            'description' => 'Laravel developers in Bengaluru.'],
            ['name' => 'Laravel Australia', 'location' => 'Brisbane, Australia',         'description' => 'Australian Laravel community.'],
        ];

        $groups = collect($groupData)->map(fn (array $data, int $i) => MeetupGroup::create([
            'user_id' => $users[$i]->id,
            'name' => $data['name'],
            'location' => $data['location'],
            'description' => $data['description'],
        ]));

        $eventData = [
            'Laravel Greece: Athens Meetup',
            'Laravel Live Denmark',
            'Laravel Meetup Germany: September',
            'Laravel Bengaluru: Tech Week Meetup',
            'Laracon AU',
        ];

        $groups->each(function (MeetupGroup $group, int $i) use ($eventData) {
            Event::create([
                'meetup_group_id' => $group->id,
                'title' => $eventData[$i],
                'slug' => Str::slug($eventData[$i]),
                'description' => null,
                'location' => $group->location,
                'starts_at' => now()->addWeeks(2),
            ]);

            Event::create([
                'meetup_group_id' => $group->id,
                'title' => $group->name.': Workshop',
                'slug' => Str::slug($group->name.': Workshop'),
                'description' => null,
                'location' => $group->location,
                'starts_at' => now()->addMonths(2),
            ]);

            Event::create([
                'meetup_group_id' => $group->id,
                'title' => $group->name.': End of Year Meetup',
                'slug' => Str::slug($group->name.': End of Year Meetup'),
                'description' => null,
                'location' => $group->location,
                'starts_at' => now()->addMonths(4),
            ]);
        });
    }
}
