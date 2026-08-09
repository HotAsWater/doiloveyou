import { useState } from 'react'
import './LetterDrawer.css'

interface Letter {
  id: string
  label: string
  note: string
}

const LETTERS: Letter[] = [
  {
    id: "stressed",
    label: "Ouvre quand tu es stréssé",
    note: "Si tu es stréssé c'est que y a quelque chose. Quand je dis quelque chose c'est pas un problème mais c'est que y a une suite. Après tout ce que tu as passé comme epreuve je suis tellement fiere de toi je le serai eternellemnt. Tu es forte, tu est la fille la plus magnifique que j'ai pu observe, tu es intelligente, sofistique, attentioné et tu mérites tellement. J'ai aucun doutes d'un futur pour toi, d'un futur heureux et paisible. Comme quand je te faisait les moment de meditation, a te faire imagine d'etre dans un champ entoure de fleures berce par les bêlement des moutons avec des montagnes et des prairies a perte de vues. Tout ca je le sortais pas de mon chapeau de copain rassurant c'est la ou je t'imaginais, la ou je te voyais heureuse ou je pouvais t'observer sourir et tout relacher comme un cheval qui est libre pour la premiere fois (oui je t'ai comparé a un cheval). Tout ca pour dire que j'ai aucun doute pour demain, il faut juste tenir tete a aujourd'hui. ",
  },
  {
    id: "doubt",
    label: "Ouvre quand tu doutes de mon amour",
    note: `J'ai jamais aimé comme ça, avant toi.
      J'ai jamais fait de voyage en amoureux, avant toi.
      J'ai jamais fait le boom boom chakalaka, avant toi.
      J'ai jamais couru a 2h du matin pour voir quelqu'un, avant toi.
      J'ai jamais autant voulu tout acheter pour une personne, avant toi.
      J'ai jamais voulu faire auttant d'application nul, avant toi.
      J'ai jamais écris de lettre/mot d'amour, avant toi.
      J'ai jamais autant pensé a quelqu'un jour et nuit, avant toi.
      J'ai jamais mis autant d'effort dans des cadeaux, avant toi.
      J'ai jamais présenté de "copine" a mes parents, avant toi.
      Et a moment j'ai jamais été si heureux que dans tes bras.
    `,
  },
  {
    id: "laugh",
    label: "Ouvre quand tu as envie de rire",
    note: "Balle rebondissante... Genre .. Plop. Et dire que j'ai cru que ca allait rester coincé.",
  },
  {
    id: "pizza",
    label: "Ouvre quand tu as envie de chèvre miel",
    note: "ET BAH T'AS BIEN RAISON! Ca me manque perso et dire que en Corée j'aurais plus ce plaisir...",
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
            <p className="letter-note__text">{openLetter.note}</p>
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