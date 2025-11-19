import React from 'react';
import config from '../config';

interface WebDesign2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WebDesign2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/web-design2)
 * @see {@link https://clicons.dev/icon/web-design2}
 */
const WebDesign2Icon = React.forwardRef<SVGSVGElement, WebDesign2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20 10.128C20 6.29644 20 4.38064 18.8284 3.19032C17.6569 2 15.7712 2 12 2H10C6.22876 2 4.34315 2 3.17157 3.19032C2 4.38064 2 6.29644 2 10.128C2 13.9596 2 15.8754 3.17157 17.0657C3.64118 17.5428 4.2255 17.8287 5 18'
    }
  ],
  [
    'path',
    {
      d: 'M22 17.5C22 15.6251 22 14.6877 21.5225 14.0305C21.3683 13.8183 21.1817 13.6317 20.9695 13.4775C20.3123 13 19.3749 13 17.5 13H12.5C10.6251 13 9.6877 13 9.03054 13.4775C8.8183 13.6317 8.63166 13.8183 8.47746 14.0305C8 14.6877 8 15.6251 8 17.5C8 19.3749 8 20.3123 8.47746 20.9695C8.63166 21.1817 8.8183 21.3683 9.03054 21.5225C9.6877 22 10.6251 22 12.5 22H17.5C19.3749 22 20.3123 22 20.9695 21.5225C21.1817 21.3683 21.3683 21.1817 21.5225 20.9695C22 20.3123 22 19.3749 22 17.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 16L17.4199 16.7929C17.8066 17.1262 18 17.2929 18 17.5C18 17.7071 17.8066 17.8738 17.4199 18.2071L16.5 19'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 16L12.5801 16.7929C12.1934 17.1262 12 17.2929 12 17.5C12 17.7071 12.1934 17.8738 12.5801 18.2071L13.5 19'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 6H19.5'
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

WebDesign2Icon.displayName = 'WebDesign2Icon';
export default WebDesign2Icon;
