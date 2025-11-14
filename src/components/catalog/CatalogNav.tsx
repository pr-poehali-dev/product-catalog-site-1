import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { categories } from '@/data/categories';
import { cn } from '@/lib/utils';

export default function CatalogNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:block w-64 border-r bg-card/50">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Icon name="LayoutGrid" size={20} />
            Каталог товаров
          </h2>
          <Accordion type="multiple" className="space-y-2">
            {categories.map((category) => (
              <AccordionItem key={category.id} value={category.id} className="border-none">
                <AccordionTrigger className="hover:no-underline py-2 px-3 rounded-lg hover:bg-accent">
                  <div className="flex items-center gap-2">
                    {category.icon && <Icon name={category.icon as any} size={18} />}
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-2 pt-1">
                  <div className="space-y-1 ml-4">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub.id}
                        to={`/catalog/${category.slug}/${sub.slug}`}
                        className="block py-1.5 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden fixed bottom-4 right-4 z-40 h-14 w-14 rounded-full shadow-lg">
            <Icon name="LayoutGrid" size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Icon name="LayoutGrid" size={20} />
              Каталог товаров
            </SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <Accordion type="multiple" className="space-y-2">
              {categories.map((category) => (
                <AccordionItem key={category.id} value={category.id} className="border-none">
                  <AccordionTrigger className="hover:no-underline py-2 px-3 rounded-lg hover:bg-accent">
                    <div className="flex items-center gap-2">
                      {category.icon && <Icon name={category.icon as any} size={18} />}
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 pt-1">
                    <div className="space-y-1 ml-4">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.id}
                          to={`/catalog/${category.slug}/${sub.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="block py-1.5 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
