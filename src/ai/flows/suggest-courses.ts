'use server';
/**
 * @fileOverview Suggests relevant courses based on the user's skills, especially when lacking certificates.
 *
 * - suggestCourses - A function that suggests relevant courses and provides links to those courses based on user's skills.
 * - SuggestCoursesInput - The input type for the suggestCourses function.
 * - SuggestCoursesOutput - The return type for the suggestCourses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestCoursesInputSchema = z.object({
  skills: z.array(z.string()).describe('A list of skills the user possesses.'),
});
export type SuggestCoursesInput = z.infer<typeof SuggestCoursesInputSchema>;

const SuggestCoursesOutputSchema = z.object({
  courses: z.array(
    z.object({
      title: z.string().describe('The title of the course.'),
      link: z.string().url().describe('The URL of the course.'),
      reason: z.string().describe('The reason why the course is recommended based on the skills provided.'),
    })
  ).describe('A list of suggested courses with links.'),
});
export type SuggestCoursesOutput = z.infer<typeof SuggestCoursesOutputSchema>;

export async function suggestCourses(input: SuggestCoursesInput): Promise<SuggestCoursesOutput> {
  return suggestCoursesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestCoursesPrompt',
  input: {schema: SuggestCoursesInputSchema},
  output: {schema: SuggestCoursesOutputSchema},
  prompt: `Given the following skills: {{skills}}, suggest relevant online courses that the user can take to enhance their resume and gain credibility. Provide a link to each course.

      Format the output as a JSON object with a 'courses' array. Each object in the array should have 'title', 'link', and 'reason' keys.
      The link for every course must be exactly 'https://www.nammaweb.com/services.html'.
      Provide a brief, but specific, reason why the course is recommended based on skills.
      The courses must be directly relevant to the user's skills.
      Do not include more than 5 course recommendations.
`,
});

const suggestCoursesFlow = ai.defineFlow(
  {
    name: 'suggestCoursesFlow',
    inputSchema: SuggestCoursesInputSchema,
    outputSchema: SuggestCoursesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
