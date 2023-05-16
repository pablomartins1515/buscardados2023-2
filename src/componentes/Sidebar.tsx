import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar() {
  const { data, loading, error} = useGetLessonsQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  if (!data || !data.lessons) {
    return <div>No lesson data available.</div>;
  }
 
  return (
    <aside className="bg-gray-50 p-6 border-gray-100 flex flex-col w-[400px] ">
      
      <span className="font-bold text-2xl pb-6 mb-6 mt-2 border-b border-gray-100 block text-blue-900 text-center">
        Últimas Notícias!!!
      </span>

      <div className="flex flex-col gap-8">
        {data.lessons.map((lesson) => {
          if (lesson.lessonType !== "live" && lesson.lessonType !== "class" ) {
            return null; // Ignora os valores inválidos de LessonType
          }

        return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}   
            />
          );
        })}
      </div>
    </aside>
  );
}
