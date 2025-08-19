
import type { TemplateProps } from './types';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Lightbulb, Award } from 'lucide-react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 border-b pb-1 mb-2">
            {title}
        </h2>
        {children}
    </div>
);

export default function ExecutiveTemplate({ data }: TemplateProps) {
    return (
        <div className="bg-white text-gray-800 p-6 font-serif w-full h-full text-xs flex flex-col overflow-hidden">
            <header className="text-center mb-6">
                <h1 className="text-3xl font-bold tracking-tight">{data.name}</h1>
                <p className="text-lg font-light text-primary">{data.experience[0]?.role || ''}</p>
                <div className="flex justify-center items-center gap-x-4 gap-y-1 mt-2 text-[11px] flex-wrap text-gray-600">
                    <span className="flex items-center"><MapPin className="h-3 w-3 mr-1.5" />{data.location}</span>
                    <span className="flex items-center"><Mail className="h-3 w-3 mr-1.5" />{data.email}</span>
                    <span className="flex items-center"><Phone className="h-3 w-3 mr-1.5" />{data.phone}</span>
                </div>
            </header>

            {data.description && (
                <p className="text-center mb-6 text-[11px]">{data.description}</p>
            )}

            <div className="flex-grow overflow-y-auto pr-2">
                <Section title="Professional Experience">
                    {data.experience.map(exp => (
                        <div key={exp.id} className="mb-3">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-sm">{exp.role}</h3>
                                <p className="text-[11px] font-medium text-gray-500">{exp.date}</p>
                            </div>
                            <p className="text-xs italic text-gray-700">{exp.company}</p>
                            <ul className="mt-1 list-disc list-inside text-[11px] text-gray-600 space-y-0.5">
                                {exp.description.split('\n').map((item, i) => item.trim() && <li key={i}>{item.replace('•','').trim()}</li>)}
                            </ul>
                        </div>
                    ))}
                </Section>
                
                <div className="grid grid-cols-2 gap-x-8">
                  <Section title="Education">
                      {data.education.map(edu => (
                          <div key={edu.id} className="mb-2">
                              <h3 className="font-bold text-sm">{edu.school}</h3>
                              <p className="text-xs italic">{edu.degree}</p>
                              <p className="text-[11px] text-gray-500">{edu.date}</p>
                          </div>
                      ))}
                  </Section>

                  <Section title="Core Competencies">
                      <ul className="text-xs columns-2 gap-x-4">
                        {data.skills.map(skill => <li key={skill}>{skill}</li>)}
                      </ul>
                  </Section>
                </div>
            </div>
        </div>
    );
}
