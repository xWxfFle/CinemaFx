import Image from 'next/image'

export function FilmCard({ image }: { image: string }) {
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={image}
          width={288}
          height={288}
          alt="Film poster"
          className="rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Barbie
          <div className="badge badge-info">18+</div>
        </h2>
        <div className="rating">
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            checked
          />
          <input type="radio" name="rating-1" className="mask mask-star" />
        </div>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p className="text-warning">Kinopoisk - 7.4</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Подробнее</button>
        </div>
      </div>
    </div>
  )
}
