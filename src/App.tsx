import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Button } from './components/ui/button';
import { validationService } from './services/validation.service';
import { localStorageService } from './services/local-storage.service';

// Define the validation schema
const formSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
});

// Infer the type from the schema
type FormData = z.infer<typeof formSchema>;

function App() {
  const [count, setCount] = useState(0);

  // Initialize react-hook-form with zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Form submission handler
  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
  };

  const handleCount = () => {
    const result = validationService.validate(
      { count: count + 1 },
      {
        count: z.number().max(10, 'Count must be less than 10'),
      }
    );
    if (result.success) {
      localStorageService.setItem('count', (count + 1).toString());
      setCount((count) => count + 1);
      console.log(localStorageService.getItem('count'));
    } else {
      console.log(result.error);
    }
  };

  useEffect(() => {
    const count = localStorageService.getItem('count');
    if (count) {
      setCount(parseInt(count));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-24 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-24 hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-spin-slow"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">Vite + React</h1>
      <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <Button onClick={handleCount}>count is {count}</Button>

        {/* Add form with Zod validation */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div>
            <input
              {...register('username')}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              placeholder="Username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          <div>
            <input
              {...register('email')}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>
      <p className="mt-8 text-gray-500">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
