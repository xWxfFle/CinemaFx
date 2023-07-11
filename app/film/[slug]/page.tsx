import { EffectorNext } from '@effector/next'
import { allSettled, fork, serialize } from 'effector'
import { $filmsToday, filmsFetched } from '@/app/model'
import { FilmCard } from '@/components/ui/film-card'

export default async function Page() {
  return (
    <EffectorNext >
      <main>
        <FilmCard image="/Barbie.jpg" />
      </main>
    </EffectorNext>
  )
}
