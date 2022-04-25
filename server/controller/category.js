// your controller do the logic and return the result

const tiktokUserCategory = [
    {
        name: 'Art',
        emoji: '🎨',
    },
    {
        name: 'Cars',
        emoji: '🚗',
    },
    {
        name: 'Computers',
        emoji: '🖥',
    },
    {
        name: 'Fashion',
        emoji: '👩‍🎤',
    },
    {
        name: 'Food',
        emoji: '🍽',
    },
    {
        name: 'Coding',
        emoji: '💻',
    },
    {
        name: 'Design',
        emoji: '🎨',
    },
    {
        name: 'Music',
        emoji: '🎵',
    },
    {
        name: 'Photography',
        emoji: '📷',
    },
    {
        name: 'Sports',
        emoji: '🏀',
    },
    {
        name: 'Travel',
        emoji: '🌍',
    },
    {
        name: 'Video Games',
        emoji: '🎮',
    },
    {
        name: 'Writing',
        emoji: '📝',
    },
    {
        name: 'Other',
        emoji: '🤔',
    }
]

// accept two parameters: req and res
const category = async (req, res) => {
    try{
        res.status(200).send(tiktokUserCategory);
    }catch(err){
        res.status(500).send(err);
    }
};

export default category;