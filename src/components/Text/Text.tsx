import React from 'react';

interface ButtonProps {
  /**
   * What color to use
   */
  color?: string;
  /**
   * How big the text should be?
   */
  size?: number;
  /**
   * Text content
   */
  text: string;
  /**
   * Optional font weight
   */
  weight?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Text = ({
    size = 16,
    color = 'black',
    text,
    weight = 'normal',
  ...props
}: ButtonProps) => {
    return (
        <p
            style={{ color, fontSize: size, fontWeight: weight }}
            {...props}
        >
            {text}
        </p>
    );
};
