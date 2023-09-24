import { useState } from 'react'
import './App.css'
import EmojiPicker, { Emoji } from 'emoji-picker-react'

function App() {
  const [emoji, setEmoji] = useState('')

  return (
    <>
      <div>
        <Emoji size={120} unified={emoji.unified} />
        <EmojiPicker
          emojiStyle="facebook"
          searchDisabled={false}
          lazyLoadEmojis={false}
          theme="dark"
          onEmojiClick={(e) => {
            setEmoji(e)
            console.log(e)
          }}

          searchPlaceHolder='Ara'
          previewConfig={{
            showPreview: true,
            defaultEmoji: '1f92a',
            defaultCaption: 'Bit emoji araaaa'
          }}
        />

        {emoji.emoji}
      </div>

    </>
  )
}

export default App
