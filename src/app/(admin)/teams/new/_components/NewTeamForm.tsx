"use client";

import { createTeam } from "../actions";

export const NewTeamForm = () => {
  return (
    <form action={createTeam} className="max-w-lg space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Team Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium">
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="logoUrl" className="block text-sm font-medium">
          Logo URL
        </label>
        <input
          type="text"
          id="logoUrl"
          name="logoUrl"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Create Team
      </button>
    </form>
  );
};