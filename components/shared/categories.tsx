import { cn } from '../../lib/utils';

interface Props {
  className?: string;
}

const cats = [
  'Піци',
  'Комбо',
  'Закуски',
  'Коктейлі',
  'Кава',
  'Напої',
  'Десерти',
];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {cats.map((cat, index) => {
        return (
          <a
            key={index}
            className={cn(
              'flex items-center font-bold h-11 rounded-2xl px-5',
              activeIndex === index &&
                'bg-white shadow-md shadow-gray-200 text-primary'
            )}
          >
            <button>{cat}</button>
          </a>
        );
      })}
    </div>
  );
};
