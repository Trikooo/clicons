import React from 'react';
import config from '../config';

interface ConversationIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ConversationIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/conversation)
 * @see {@link https://clicons.dev/icon/conversation}
 */
const ConversationIcon = React.forwardRef<SVGSVGElement, ConversationIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.99994 6V5C6.99994 3.58579 6.99994 2.87868 7.43928 2.43934C7.87862 2 8.58573 2 9.99994 2H13.9999C15.4142 2 16.1213 2 16.5606 2.43934C16.9999 2.87868 16.9999 3.58579 16.9999 5V6C16.9999 7.41421 16.9999 8.12132 16.5606 8.56066C16.1213 9 15.4142 9 13.9999 9H12.9999L9.99994 11V9C8.58573 9 7.87862 9 7.43928 8.56066C6.99994 8.12132 6.99994 7.41421 6.99994 6Z'
    }
  ],
  [
    'path',
    {
      d: 'M3.59 18.7408C2.96122 19.162 1.31258 20.0221 2.31671 21.0983C2.80722 21.624 3.35352 22 4.04036 22H5.99997H7.95958C8.64642 22 9.19272 21.624 9.68323 21.0983C10.6874 20.0221 9.03872 19.162 8.40994 18.7408C6.93544 17.7531 5.0645 17.7531 3.59 18.7408Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.59 18.7408C14.9612 19.162 13.3126 20.0221 14.3167 21.0983C14.8072 21.624 15.3535 22 16.0404 22H18H19.9596C20.6464 22 21.1927 21.624 21.6832 21.0983C22.6874 20.0221 21.0387 19.162 20.4099 18.7408C18.9354 17.7531 17.0645 17.7531 15.59 18.7408Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.99997 13.5C7.99997 14.6046 7.10454 15.5 5.99997 15.5C4.8954 15.5 3.99997 14.6046 3.99997 13.5C3.99997 12.3954 4.8954 11.5 5.99997 11.5C7.10454 11.5 7.99997 12.3954 7.99997 13.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M20 13.5C20 14.6046 19.1045 15.5 18 15.5C16.8954 15.5 16 14.6046 16 13.5C16 12.3954 16.8954 11.5 18 11.5C19.1045 11.5 20 12.3954 20 13.5Z'
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

ConversationIcon.displayName = 'ConversationIcon';
export default ConversationIcon;
