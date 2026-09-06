import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { categories } from '@/data/categories';
import { getProductCountByCategory, getProductCountBySubcategory } from '@/data/products';
import { cn } from '@/lib/utils';

function NavTree({ onNavigate }: { onNavigate?: () => void }) {
  const { categorySlug, subcategorySlug, subSubcategorySlug } = useParams();

  const activeCategoryId = categories.find(c => c.slug === categorySlug)?.id;

  return (
    <Accordion type="multiple" className="space-y-1" defaultValue={activeCategoryId ? [activeCategoryId] : []}>
      {categories.map((category) => {
        const isActiveCategory = category.slug === categorySlug;
        const count = getProductCountByCategory(category.id);

        return (
          <AccordionItem key={category.id} value={category.id} className="border-none">
            <AccordionTrigger
              className={cn(
                'hover:no-underline py-2 px-3 rounded-lg hover:bg-accent',
                isActiveCategory && !subcategorySlug && 'bg-accent'
              )}
            >
              <Link
                to={`/catalog/${category.slug}`}
                onClick={(e) => { e.stopPropagation(); onNavigate?.(); }}
                className="flex items-center gap-2 flex-1 min-w-0"
              >
                {category.icon && <Icon name={category.icon as any} size={18} />}
                <span className={cn('text-sm font-medium truncate', isActiveCategory && 'text-primary')}>
                  {category.name}
                </span>
              </Link>
              <span className="text-xs text-muted-foreground font-normal mr-1">{count}</span>
            </AccordionTrigger>
            <AccordionContent className="pb-2 pt-1">
              <div className="space-y-0.5 ml-4 border-l pl-3">
                {category.subcategories.map((sub) => {
                  const isActiveSub = isActiveCategory && sub.slug === subcategorySlug;
                  const subCount = getProductCountBySubcategory(sub.id);

                  if (sub.subSubcategories && sub.subSubcategories.length > 0) {
                    return (
                      <Accordion key={sub.id} type="multiple" className="space-y-0.5" defaultValue={isActiveSub ? [sub.id] : []}>
                        <AccordionItem value={sub.id} className="border-none">
                          <AccordionTrigger className="hover:no-underline py-1.5 px-2 text-sm rounded-md hover:bg-accent">
                            <Link
                              to={`/catalog/${category.slug}/${sub.slug}`}
                              onClick={(e) => { e.stopPropagation(); onNavigate?.(); }}
                              className={cn('flex-1 min-w-0 text-left truncate', isActiveSub && 'text-primary font-medium')}
                            >
                              {sub.name}
                            </Link>
                            <span className="text-xs text-muted-foreground font-normal mr-1">{subCount}</span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-1 pt-1">
                            <div className="space-y-0.5 ml-3 border-l pl-3">
                              {sub.subSubcategories.map((subSub) => (
                                <Link
                                  key={subSub.id}
                                  to={`/catalog/${category.slug}/${sub.slug}/${subSub.slug}`}
                                  onClick={onNavigate}
                                  className={cn(
                                    'block py-1 px-2 text-xs text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors truncate',
                                    subSub.slug === subSubcategorySlug && 'text-primary font-medium bg-accent'
                                  )}
                                >
                                  {subSub.name}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    );
                  }

                  return (
                    <Link
                      key={sub.id}
                      to={`/catalog/${category.slug}/${sub.slug}`}
                      onClick={onNavigate}
                      className={cn(
                        'flex items-center justify-between gap-2 py-1.5 px-2 text-sm rounded-md transition-colors truncate',
                        isActiveSub
                          ? 'text-primary font-medium bg-accent'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      )}
                    >
                      <span className="truncate">{sub.name}</span>
                      <span className="text-xs text-muted-foreground shrink-0">{subCount}</span>
                    </Link>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default function CatalogNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { categorySlug, subcategorySlug, subSubcategorySlug } = useParams();

  useEffect(() => {
    setIsOpen(false);
  }, [categorySlug, subcategorySlug, subSubcategorySlug]);

  return (
    <>
      <div className="hidden lg:block w-72 border-r bg-card/50 shrink-0">
        <div className="p-4 sticky top-[73px] max-h-[calc(100vh-73px)] overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Icon name="LayoutGrid" size={20} />
            Каталог товаров
          </h2>
          <NavTree />
        </div>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden fixed bottom-4 right-4 z-40 h-14 w-14 rounded-full shadow-lg">
            <Icon name="LayoutGrid" size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Icon name="LayoutGrid" size={20} />
              Каталог товаров
            </SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <NavTree onNavigate={() => setIsOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
