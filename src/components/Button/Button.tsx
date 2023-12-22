import React from 'react';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  children: string;
  /**
   * What background color to use
   */
  variant?: 'primary' | 'secondary';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  disabled = false,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  let backgroundColor = variant === 'primary' ? 'cornflowerblue' : 'orange';
  
  if(disabled) {
    backgroundColor = 'darkgray';
  }

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      style={{ color: 'white', borderColor: backgroundColor, backgroundColor, borderRadius: 10, padding: 8 }}
      {...props}
    >
      {children}
    </button>
  );
};
