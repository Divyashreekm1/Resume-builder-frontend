'use server';

import { suggestCourses } from '@/ai/flows/suggest-courses';
import type { SuggestCoursesOutput, SuggestCoursesInput } from '@/ai/flows/suggest-courses';

export async function getSuggestedCourses(input: SuggestCoursesInput): Promise<SuggestCoursesOutput> {
  if (!input.skills || input.skills.length === 0) {
    throw new Error('Skills are required to suggest courses.');
  }

  try {
    const result = await suggestCourses(input);
    return result;
  } catch (error) {
    console.error('Error suggesting courses:', error);
    throw new Error('Failed to get course suggestions from AI.');
  }
}
