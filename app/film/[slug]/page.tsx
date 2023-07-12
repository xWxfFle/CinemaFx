import { EffectorNext } from '@effector/next'
import { fork, serialize } from 'effector'
import { $filmsToday } from '@/app/model'
import { FilmCard } from '@/components/ui/film-card'

export default async function Page() {
  const scope = fork()

  const values = serialize(scope)

  const list = scope.getState($filmsToday)
  console.log(list)
  return (
    <EffectorNext values={values}>
      <main>
        <FilmCard image="/Barbie.jpg" />
      </main>
    </EffectorNext>
  )
}
