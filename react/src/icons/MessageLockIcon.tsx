import React from 'react';
import config from '../config';

interface MessageLockIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MessageLockIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/message-lock)
 * @see {@link https://clicons.dev/icon/message-lock}
 */
const MessageLockIcon = React.forwardRef<SVGSVGElement, MessageLockIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 13.4908C21.7253 17.7331 18.3866 21.1124 14.1951 21.3904C12.7652 21.4853 11.2722 21.4851 9.84518 21.3904C9.35376 21.3578 8.81812 21.2408 8.3568 21.0512C7.84352 20.8402 7.58684 20.7347 7.45641 20.7507C7.32598 20.7667 7.13674 20.906 6.75825 21.1845C6.09091 21.6756 5.25021 22.0284 4.00346 21.9981C3.37302 21.9828 3.0578 21.9751 2.91669 21.735C2.77557 21.4949 2.95132 21.1625 3.30283 20.4977C3.79035 19.5757 4.09923 18.5202 3.63119 17.6745C2.82509 16.4665 2.14038 15.0359 2.04032 13.4908C1.98656 12.6606 1.98656 11.8008 2.04032 10.9706C2.31504 6.72826 5.65374 3.34901 9.84518 3.07095C10.7223 3.01277 11.6242 2.99027 12.5212 3.0036'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 14.9999H15.5M8.5 9.99988H12'
    }
  ],
  [
    'path',
    {
      d: 'M16.7374 5.17553L16.7374 3.78517C16.7374 3.5798 16.746 3.37188 16.8196 3.1801C17.0155 2.66962 17.5346 2.00085 18.4795 2.00085C19.4245 2.00085 19.9639 2.66962 20.1598 3.1801C20.2335 3.37188 20.242 3.5798 20.242 3.78517L20.242 5.17553M16.8069 10.9984H20.1929C21.1898 10.9984 21.9979 10.1918 21.9979 9.19686V7.19551C21.9979 6.20053 21.1898 5.39394 20.1929 5.39394H16.8069C15.8101 5.39394 15.002 6.20053 15.002 7.19551V9.19686C15.002 10.1918 15.8101 10.9984 16.8069 10.9984Z'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

MessageLockIcon.displayName = 'MessageLockIcon';
export default MessageLockIcon;
