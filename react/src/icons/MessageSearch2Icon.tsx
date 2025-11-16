import React from 'react';
import config from '../config';

interface MessageSearch2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MessageSearch2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/message-search2)
 * @see {@link https://clicons.dev/icon/message-search2}
 */
const MessageSearch2Icon = React.forwardRef<SVGSVGElement, MessageSearch2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11.5071 3C10.9462 3.01156 10.2474 3.03103 9.83523 3.05843C5.6491 3.33667 2.31464 6.71817 2.04027 10.9634C1.98658 11.7941 1.98658 12.6544 2.04027 13.4852C2.1402 15.0313 2.82405 16.4629 3.62912 17.6717C4.09657 18.518 3.78807 19.5742 3.30118 20.4968C2.95012 21.162 2.77459 21.4946 2.91552 21.7349C3.05646 21.9752 3.37128 21.9829 4.00091 21.9982C5.24608 22.0285 6.08572 21.6755 6.75221 21.1841C7.13022 20.9054 7.31922 20.766 7.44949 20.75C7.57976 20.734 7.83611 20.8395 8.34873 21.0506C8.80947 21.2404 9.34443 21.3575 9.83523 21.3901C11.2605 21.4849 12.7515 21.485 14.1797 21.3901C18.3658 21.1119 21.7003 17.7304 21.9746 13.4852C21.9851 13.3224 21.9936 13.1586 22 12.994'
    }
  ],
  [
    'path',
    {
      d: 'M11.9953 12.5H12.0043M15.9908 12.5H15.9998M7.99982 12.5H8.00879'
    }
  ],
  [
    'path',
    {
      d: 'M20.017 8.02334L22 10M21.0531 5.52653C21.0531 3.57888 19.4742 2 17.5265 2C15.5789 2 14 3.57888 14 5.52653C14 7.47418 15.5789 9.05306 17.5265 9.05306C19.4742 9.05306 21.0531 7.47418 21.0531 5.52653Z'
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

MessageSearch2Icon.displayName = 'MessageSearch2Icon';
export default MessageSearch2Icon;
