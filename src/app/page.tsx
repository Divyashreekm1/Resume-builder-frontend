
'use client';

import React, { useState, useRef, useId, Fragment } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  PlusCircle,
  Trash2,
  Download,
  Sparkles,
  Loader2,
  User,
  GraduationCap,
  Briefcase,
  Lightbulb,
  Award,
  FolderKanban,
  Book,
} from 'lucide-react';

import type { ResumeData, Experience, Education, Certificate, Project } from '@/lib/types';
import { placeholderData } from '@/lib/placeholder-data';
import { commerceData } from '@/lib/commerce-data';
import { salesData } from '@/lib/sales-data';
import { engineerData } from '@/lib/engineer-data';
import { medicalData } from '@/lib/medical-data';
import { designerData } from '@/lib/designer-data';
import { mechanicalEngineerData } from '@/lib/mechanical-engineer-data';
import { electricalEngineerData } from '@/lib/electrical-engineer-data';
import { artsData } from '@/lib/arts-data';
import { accountantData } from '@/lib/accountant-data';
import { managerData } from '@/lib/manager-data';
import { executiveData } from '@/lib/executive-data';
import { softwareDeveloperData } from '@/lib/software-developer-data';
import { dataAnalystData } from '@/lib/data-analyst-data';

import { getSuggestedCourses } from './actions';
import ClassicTemplate from '@/components/templates/classic';
import ModernTemplate from '@/components/templates/modern';
import CommerceTemplate from '@/components/templates/commerce';
import SalesTemplate from '@/components/templates/sales';
import EngineerTemplate from '@/components/templates/engineer';
import MedicalTemplate from '@/components/templates/medical';
import DesignerTemplate from '@/components/templates/designer';
import MechanicalEngineerTemplate from '@/components/templates/mechanical-engineer';
import ElectricalEngineerTemplate from '@/components/templates/electrical-engineer';
import ArtsTemplate from '@/components/templates/arts';
import AccountantTemplate from '@/components/templates/accountant';
import ManagerTemplate from '@/components/templates/manager';
import ExecutiveTemplate from '@/components/templates/executive';
import SoftwareDeveloperTemplate from '@/components/templates/software-developer';
import DataAnalystTemplate from '@/components/templates/data-analyst';
import { LogoIcon } from '@/components/icons';
import type { SuggestCoursesOutput } from '@/ai/flows/suggest-courses';

type Template = 
  | 'modern' | 'classic' | 'commerce' | 'sales' | 'engineer' | 'medical' | 'designer'
  | 'mechanical-engineer' | 'electrical-engineer' | 'arts' | 'accountant'
  | 'manager' | 'executive' | 'software-developer' | 'data-analyst';

const templates: { name: Template, label: string, component: React.FC<{data: ResumeData}> }[] = [
    { name: 'modern', label: 'Modern', component: ModernTemplate },
    { name: 'classic', label: 'Classic', component: ClassicTemplate },
    { name: 'commerce', label: 'Commerce', component: CommerceTemplate },
    { name: 'sales', label: 'Sales', component: SalesTemplate },
    { name: 'engineer', label: 'Engineer', component: EngineerTemplate },
    { name: 'software-developer', label: 'Software Dev', component: SoftwareDeveloperTemplate },
    { name: 'data-analyst', label: 'Data Analyst', component: DataAnalystTemplate },
    { name: 'mechanical-engineer', label: 'Mechanical Eng.', component: MechanicalEngineerTemplate },
    { name: 'electrical-engineer', label: 'Electrical Eng.', component: ElectricalEngineerTemplate },
    { name: 'medical', label: 'Medical', component: MedicalTemplate },
    { name: 'designer', label: 'Designer', component: DesignerTemplate },
    { name: 'arts', label: 'Arts', component: ArtsTemplate },
    { name: 'accountant', label: 'Accountant', component: AccountantTemplate },
    { name: 'manager', label: 'Manager', component: ManagerTemplate },
    { name: 'executive', label: 'Executive', component: ExecutiveTemplate },
];

const templateDataMapping: Record<Template, ResumeData> = {
    modern: placeholderData,
    classic: placeholderData,
    commerce: commerceData,
    sales: salesData,
    engineer: engineerData,
    medical: medicalData,
    designer: designerData,
    'mechanical-engineer': mechanicalEngineerData,
    'electrical-engineer': electricalEngineerData,
    arts: artsData,
    accountant: accountantData,
    manager: managerData,
    executive: executiveData,
    'software-developer': softwareDeveloperData,
    'data-analyst': dataAnalystData,
};

export default function ResumeBuilderPage() {
  const [data, setData] = useState<ResumeData>(placeholderData);
  const [selectedTemplate, setSelectedTemplate] = useState<Template>('modern');
  const [suggestedCourses, setSuggestedCourses] = useState<SuggestCoursesOutput | null>(null);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const { toast } = useToast();
  const formId = useId();

  const handleTemplateChange = (newTemplate: Template) => {
    setSelectedTemplate(newTemplate);
    setData(templateDataMapping[newTemplate]);
  };
  
  const handlePrint = () => {
    document.body.classList.add('printing');
    window.print();
    document.body.classList.remove('printing');
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSkillsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(prev => ({...prev, skills: e.target.value.split('\n').filter(s => s.trim() !== '')}));
  }

  const handleGenericChange = <T extends Experience | Education | Certificate | Project>(
    section: keyof ResumeData,
    index: number,
    field: keyof T,
    value: string
  ) => {
    setData((prev) => {
      const sectionData = prev[section] as T[];
      const newSectionData = [...sectionData];
      newSectionData[index] = { ...newSectionData[index], [field]: value };
      return { ...prev, [section]: newSectionData };
    });
  };

  const addGenericItem = <T extends { id: string }>(section: keyof ResumeData, newItem: T) => {
    setData(prev => ({...prev, [section]: [...(prev[section] as T[]), newItem]}));
  };

  const removeGenericItem = (section: keyof ResumeData, index: number) => {
    setData(prev => ({...prev, [section]: (prev[section] as any[]).filter((_, i) => i !== index)}));
  };

  const handleSuggestCourses = async () => {
    if (data.skills.length === 0) {
      toast({
        variant: 'destructive',
        title: 'No skills provided',
        description: 'Please add some skills to get course suggestions.',
      });
      return;
    }
    setIsSuggesting(true);
    try {
      const result = await getSuggestedCourses({ skills: data.skills });
      setSuggestedCourses(result);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to get course suggestions. Please try again.',
      });
    } finally {
      setIsSuggesting(false);
    }
  };

  const SectionIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
    <Icon className="h-5 w-5 mr-2 text-primary" />
  );
  
  const SelectedTemplateComponent = templates.find(t => t.name === selectedTemplate)?.component;

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex items-center">
            <LogoIcon className="h-8 w-8 mr-2 text-primary" />
            <span className="font-bold text-lg">ResumeFlow</span>
          </div>
        </div>
      </header>
      <main className="container grid md:grid-cols-[450px_1fr] lg:grid-cols-[600px_1fr] gap-8 py-8 items-start">
        <div className="flex flex-col gap-8 order-2 md:order-1">
          <Card>
            <CardHeader>
              <CardTitle>Resume Content</CardTitle>
              <CardDescription>Fill in your details to build your resume. The live preview will update as you type.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" defaultValue={['personal', 'experience']} className="w-full">
                {/* Personal Details */}
                <AccordionItem value="personal">
                  <AccordionTrigger className="text-lg font-semibold"><div className="flex items-center"><SectionIcon icon={User} />Personal Details</div></AccordionTrigger>
                  <AccordionContent className="grid gap-4 p-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`${formId}-name`}>Full Name</Label>
                        <Input id={`${formId}-name`} name="name" value={data.name} onChange={handleInputChange} placeholder="e.g. Jane Doe" />
                      </div>
                      <div>
                        <Label htmlFor={`${formId}-location`}>Location</Label>
                        <Input id={`${formId}-location`} name="location" value={data.location} onChange={handleInputChange} placeholder="e.g. San Francisco, CA" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`${formId}-email`}>Email</Label>
                        <Input id={`${formId}-email`} name="email" type="email" value={data.email} onChange={handleInputChange} placeholder="e.g. jane.doe@example.com" />
                      </div>
                      <div>
                        <Label htmlFor={`${formId}-phone`}>Phone</Label>
                        <Input id={`${formId}-phone`} name="phone" type="tel" value={data.phone} onChange={handleInputChange} placeholder="e.g. (123) 456-7890" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor={`${formId}-description`}>Professional Summary</Label>
                      <Textarea id={`${formId}-description`} name="description" value={data.description} onChange={handleInputChange} placeholder="A brief summary of your career and skills..." rows={4}/>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                {/* Experience */}
                <AccordionItem value="experience">
                  <AccordionTrigger className="text-lg font-semibold"><div className="flex items-center"><SectionIcon icon={Briefcase} />Experience</div></AccordionTrigger>
                  <AccordionContent className="space-y-4 p-1">
                    {data.experience.map((exp, index) => (
                      <Card key={exp.id}>
                        <CardContent className="p-4 space-y-4 relative">
                          <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={() => removeGenericItem('experience', index)}><Trash2 className="h-4 w-4" /></Button>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><Label>Company</Label><Input value={exp.company} onChange={e => handleGenericChange('experience', index, 'company', e.target.value)} /></div>
                            <div><Label>Role</Label><Input value={exp.role} onChange={e => handleGenericChange('experience', index, 'role', e.target.value)} /></div>
                          </div>
                          <div><Label>Date</Label><Input value={exp.date} onChange={e => handleGenericChange('experience', index, 'date', e.target.value)} placeholder="e.g. June 2020 - Present"/></div>
                          <div><Label>Description</Label><Textarea value={exp.description} onChange={e => handleGenericChange('experience', index, 'description', e.target.value)} placeholder="Key achievements and responsibilities..." rows={3}/></div>
                        </CardContent>
                      </Card>
                    ))}
                    <Button variant="outline" onClick={() => addGenericItem('experience', {id: crypto.randomUUID(), company: '', role: '', date: '', description: ''})}><PlusCircle className="mr-2 h-4 w-4" /> Add Experience</Button>
                  </AccordionContent>
                </AccordionItem>
                
                {/* Education */}
                <AccordionItem value="education">
                  <AccordionTrigger className="text-lg font-semibold"><div className="flex items-center"><SectionIcon icon={GraduationCap} />Education</div></AccordionTrigger>
                  <AccordionContent className="space-y-4 p-1">
                    {data.education.map((edu, index) => (
                      <Card key={edu.id}>
                        <CardContent className="p-4 space-y-4 relative">
                          <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={() => removeGenericItem('education', index)}><Trash2 className="h-4 w-4" /></Button>
                          <div><Label>School/University</Label><Input value={edu.school} onChange={e => handleGenericChange('education', index, 'school', e.target.value)} /></div>
                          <div><Label>Degree/Field of Study</Label><Input value={edu.degree} onChange={e => handleGenericChange('education', index, 'degree', e.target.value)} /></div>
                          <div><Label>Date</Label><Input value={edu.date} onChange={e => handleGenericChange('education', index, 'date', e.target.value)} placeholder="e.g. Sept 2016 - May 2020"/></div>
                        </CardContent>
                      </Card>
                    ))}
                    <Button variant="outline" onClick={() => addGenericItem('education', {id: crypto.randomUUID(), school: '', degree: '', date: ''})}><PlusCircle className="mr-2 h-4 w-4" /> Add Education</Button>
                  </AccordionContent>
                </AccordionItem>

                {/* Skills */}
                <AccordionItem value="skills">
                  <AccordionTrigger className="text-lg font-semibold"><div className="flex items-center"><SectionIcon icon={Lightbulb} />Skills</div></AccordionTrigger>
                  <AccordionContent className="p-1">
                    <Label htmlFor={`${formId}-skills`}>Skills (one per line)</Label>
                    <Textarea id={`${formId}-skills`} value={data.skills.join('\n')} onChange={handleSkillsChange} placeholder="e.g. JavaScript\nReact\nNode.js" rows={5}/>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {data.skills.map((skill, i) => (
                            <div key={i} className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">{skill}</div>
                        ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Certificates */}
                <AccordionItem value="certificates">
                  <AccordionTrigger className="text-lg font-semibold"><div className="flex items-center"><SectionIcon icon={Award} />Certificates</div></AccordionTrigger>
                  <AccordionContent className="space-y-4 p-1">
                     <div className="p-4 bg-accent/20 border border-accent/50 rounded-lg flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-primary">Need a Certificate?</h4>
                          <p className="text-sm text-muted-foreground">Get AI-powered course suggestions based on your skills.</p>
                        </div>
                        <Button onClick={handleSuggestCourses} disabled={isSuggesting || data.skills.length === 0}>
                          {isSuggesting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                          Suggest Courses
                        </Button>
                      </div>
                    {data.certificates.map((cert, index) => (
                      <Card key={cert.id}>
                        <CardContent className="p-4 space-y-4 relative">
                          <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={() => removeGenericItem('certificates', index)}><Trash2 className="h-4 w-4" /></Button>
                          <div><Label>Certificate Name</Label><Input value={cert.name} onChange={e => handleGenericChange('certificates', index, 'name', e.target.value)} /></div>
                          <div><Label>Issuing Body</Label><Input value={cert.issuingBody} onChange={e => handleGenericChange('certificates', index, 'issuingBody', e.target.value)} /></div>
                          <div><Label>Date</Label><Input value={cert.date} onChange={e => handleGenericChange('certificates', index, 'date', e.target.value)} placeholder="e.g. March 2021"/></div>
                        </CardContent>
                      </Card>
                    ))}
                    <Button variant="outline" onClick={() => addGenericItem('certificates', {id: crypto.randomUUID(), name: '', issuingBody: '', date: ''})}><PlusCircle className="mr-2 h-4 w-4" /> Add Certificate</Button>
                  </AccordionContent>
                </AccordionItem>

                {/* Projects */}
                <AccordionItem value="projects">
                  <AccordionTrigger className="text-lg font-semibold"><div className="flex items-center"><SectionIcon icon={FolderKanban} />Projects</div></AccordionTrigger>
                  <AccordionContent className="space-y-4 p-1">
                    {data.projects.map((proj, index) => (
                      <Card key={proj.id}>
                        <CardContent className="p-4 space-y-4 relative">
                          <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={() => removeGenericItem('projects', index)}><Trash2 className="h-4 w-4" /></Button>
                          <div><Label>Project Name</Label><Input value={proj.name} onChange={e => handleGenericChange('projects', index, 'name', e.target.value)} /></div>
                          <div><Label>Link</Label><Input value={proj.link} onChange={e => handleGenericChange('projects', index, 'link', e.target.value)} /></div>
                          <div><Label>Description</Label><Textarea value={proj.description} onChange={e => handleGenericChange('projects', index, 'description', e.target.value)} placeholder="Describe your project, your role, and technologies used." rows={3}/></div>
                        </CardContent>
                      </Card>
                    ))}
                    <Button variant="outline" onClick={() => addGenericItem('projects', {id: crypto.randomUUID(), name: '', link: '', description: ''})}><PlusCircle className="mr-2 h-4 w-4" /> Add Project</Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="sticky top-24 order-1 md:order-2">
          <Card>
            <CardHeader>
              <CardTitle>Preview & Download</CardTitle>
              <CardDescription>Select a template and download your resume.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                  <Carousel
                    opts={{
                      align: "start",
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {templates.map((template, index) => (
                        <CarouselItem key={index} className="basis-1/3 md:basis-1/2 lg:basis-1/3">
                          <div className="p-1">
                            <Button
                              variant={selectedTemplate === template.name ? 'default' : 'outline'}
                              className="w-full"
                              onClick={() => handleTemplateChange(template.name)}
                            >
                              {template.label}
                            </Button>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
              </div>

              <div id="print-container" className="p-4 border rounded-lg bg-secondary/30 min-h-[500px] max-h-[70vh] overflow-auto">
                  <div className="bg-background shadow-lg mx-auto" style={{aspectRatio: '1 / 1.414', width: '100%'}}>
                      {SelectedTemplateComponent && <SelectedTemplateComponent data={data} />}
                  </div>
              </div>
              
              <Button onClick={handlePrint} className="w-full mt-4 text-lg py-6">
                <Download className="mr-2 h-5 w-5" /> Download as PDF
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Dialog open={!!suggestedCourses} onOpenChange={(isOpen) => !isOpen && setSuggestedCourses(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Sparkles className="h-6 w-6 mr-2 text-primary" />
              Course Suggestions
            </DialogTitle>
            <DialogDescription>
              Based on your skills, here are some courses you might find helpful.
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto pr-4">
            {suggestedCourses?.courses.map((course, index) => (
              <Fragment key={index}>
                <div className="grid gap-2 py-4">
                    <h4 className="font-semibold text-lg flex items-center">
                      <Book className="h-4 w-4 mr-2 text-accent" />
                      {course.title}
                    </h4>
                    <p className="text-muted-foreground">{course.reason}</p>
                    <a href={course.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline font-code">{course.link}</a>
                </div>
                {index < suggestedCourses.courses.length - 1 && <Separator />}
              </Fragment>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
