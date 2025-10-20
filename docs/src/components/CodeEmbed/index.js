import React, {useState, useEffect} from 'react';
import CodeBlock from '@theme/CodeBlock';
import Icon from '@site/src/components/Icon';

/**
 * CodeEmbed component to display code fetched from a URL in a CodeBlock.
 * @param {object} props
 * @param {string} props.src - Source URL to fetch the code from.
 * @param {string} [props.language='java'] - Language for syntax highlighting in CodeBlock.
 */
const CodeEmbed = ({src, language = 'java'}) => {
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchCodeFromUrl = async (url) => {
            if (!isMounted) return;

            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.text();
                if (isMounted) {
                    setCode(data);
                }
            } catch (err) {
                console.error('Failed to fetch code:', err);
                if (isMounted) {
                    setError(err);
                    setCode(`// Failed to load code from ${url}\n// ${err.message}`);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        if (src) {
            fetchCodeFromUrl(src);
        }

        return () => {
            isMounted = false;
        };
    }, [src]);

    const githubUrl = src ? src.replace('https://raw.githubusercontent.com', 'https://github.com').replace('/refs/heads/', '/blob/') : null;
    const fileName = src ? src.substring(src.lastIndexOf('/') + 1) : null;

    const title = (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: 'gray',
                    textDecoration: 'none',
                }}
                onMouseOver={e => {
                    e.target.style.textDecoration = 'underline';
                }}
                onMouseOut={e => {
                    e.target.style.textDecoration = 'none';
                }}
            >
                <span>{fileName}</span>
            </a>
            {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{
                    color: 'gray',
                    fontSize: '0.9em',
                    fontStyle: 'italic',
                    display: 'inline-flex',
                    alignItems: 'center'
                }}>
                    View on GitHub
                    <Icon icon="mdi:github" height="1em"/>
                </a>
            )}
        </div>
    );

    return (
        loading ? (
            <div>Loading code...</div>
        ) : error ? (
            <div>Error: {error.message}</div>
        ) : (
            <div style={{backgroundColor: 'transparent', padding: '0px', borderRadius: '5px'}}>
                <CodeBlock title={title} language={language}>{code}</CodeBlock>
            </div>
        )
    );
};

export default CodeEmbed;
