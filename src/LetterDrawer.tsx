import { useState } from 'react'
import './LetterDrawer.css'

type Block =
  | { type: 'text'; value: string }
  | { type: 'image'; src: string }

interface Letter {
  id: string
  label: string
  content: Block[]
}


const TAPE_COUNT = 3

function randomTape(): string {
  const n = Math.floor(Math.random() * TAPE_COUNT) + 1
  return `./tape${n}.png`
}

const LETTERS: Letter[] = [
  {
    id: "stressed",
    label: "Ouvre quand tu es stréssé",
    content: [
      { type: 'text', value: "Si tu es stréssé c'est que y a quelque chose. Quand je dis quelque chose c'est pas un problème mais c'est que y a une suite. Après tout ce que tu as passé comme epreuve je suis tellement fiere de toi je le serai eternellemnt. Tu es forte, tu est la fille la plus magnifique que j'ai pu observe, tu es intelligente, sofistique, attentioné et tu mérites tellement. J'ai aucun doutes d'un futur pour toi, d'un futur heureux et paisible. Comme quand je te faisait les moment de meditation, a te faire imagine d'etre dans un champ entoure de fleures berce par les bêlement des moutons avec des montagnes et des prairies a perte de vues. Tout ca je le sortais pas de mon chapeau de copain rassurant c'est la ou je t'imaginais, la ou je te voyais heureuse ou je pouvais t'observer sourir et tout relacher comme un cheval qui est libre pour la premiere fois (oui je t'ai comparé a un cheval). Tout ca pour dire que j'ai aucun doute pour demain, il faut juste tenir tete a aujourd'hui. "}
    ],
  },
  {
    id: "doubt",
    label: "Ouvre quand tu doutes de mon amour",
    content: [
      { type: 'text', value: `J'ai jamais aimé comme ça, avant toi.
      J'ai jamais fait de voyage en amoureux, avant toi.
      J'ai jamais fait le boom boom chakalaka, avant toi.
      J'ai jamais couru a 2h du matin pour voir quelqu'un, avant toi.
      J'ai jamais autant voulu tout acheter pour une personne, avant toi.
      J'ai jamais voulu faire auttant d'application nul, avant toi.
      J'ai jamais écris de lettre/mot d'amour, avant toi.
      J'ai jamais autant pensé a quelqu'un jour et nuit, avant toi.
      J'ai jamais mis autant d'effort dans des cadeaux, avant toi.
      J'ai jamais présenté de "copine" a mes parents, avant toi.
      Et a moment j'ai jamais été si heureux que dans tes bras.`},
      { type: 'image', src: './hug.png' },
    ],
  },
  {
    id: "laugh",
    label: "Ouvre quand tu as envie de rire",
    content: [
      { type: 'text', value: "Balle rebondissante... Genre .. Plop. Et dire que j'ai cru que ca allait rester coincé."}
    ],
  },
  {
    id: "pizza",
    label: "Ouvre quand tu as envie de chèvre miel",
    content: [
      { type: 'text', value: `ET BAH T'AS BIEN RAISON! Ca me manque perso et dire que en Corée j'aurais plus ce plaisir... (envoi une photo de la pizza stp)

      PS: Envoi moi des snap de ce que tu manges aussi, surtout quand c'est des chèvre miel, Marseille avec toi me manque`},
      { type: 'image', src: './mrs.png' },
    ],
  },
  {
    id: "10ans",
    label: "Ouvre pour nos 10 ans (ou maintenant)",
    content: [
      { type: 'text', value: `EH ca fait pas dis ans tu fait quoi la???? Bon bon ok ok tu veux savoir..
      Pour nos 10 ans.
      Dans un beau restaurent.
      Toi, toujours aussi belle, dans une robe qui te fait briller, une robe choisie pour l'occasion.
      Moi, toujours aussi amoureux, qui te regarde arriver a la table pendant que je cherche encore mes mots.
      Et dans ce restaurant, en Sicile sans personne juste nous, il y aura un piano.
      Un beau piano a queue, un Steinway choisie par mes soins en avance.
      Je jouerai pour toi, je chanterai "10 ans de nous" en pensant a toutes ces années passé ensemble.
      Ces 10 années a se chercher a s'enerver a s'aimer, ces 10 années passé dans les yeux de l'autre.

      "10 ans de nous, 10 ans de nous..."

      Nous et tout ce qui vient avec, nos chiens nos enfant notre maison.


      PS: Reminder que je t'aime
      `},
      { type: 'image', src: './reminder-jtm.png' },
    ],
  },
]

function LetterDrawer() {
  const [openId, setOpenId] = useState<string | null>(null)

  const openLetter = LETTERS.find((l) => l.id === openId) ?? null

  return (
    <div className="letter-drawer">
      <div className="letter-grid">
        {LETTERS.map((letter) => (
          <button
            key={letter.id}
            className="envelope"
            onClick={() => setOpenId(letter.id)}
          >
            <span className="envelope__label">{letter.label}</span>
          </button>
        ))}
      </div>

      {openLetter && (
        <div className="letter-overlay" onClick={() => setOpenId(null)}>
          <div className="letter-note" onClick={(e) => e.stopPropagation()}>
            <p className="letter-note__label">{openLetter.label}</p>
            {openLetter.content.map((block, i) =>
              block.type === 'text' ? (
                <p key={i} className="letter-note__text">
                  {block.value}
                </p>
              ) : (
                <div key={i} className="photo-frame">
                  <img className="photo-frame__tape photo-frame__tape--tr" src={randomTape()} alt="" />
                  <img className="letter-note__image" src={block.src} alt="" />
                  <img className="photo-frame__tape photo-frame__tape--bl" src={randomTape()} alt="" />
                </div>
              )
            )}
            <button className="letter-note__close" onClick={() => setOpenId(null)}>
              close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default LetterDrawer