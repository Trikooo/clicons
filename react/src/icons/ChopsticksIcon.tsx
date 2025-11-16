import React from 'react';
import config from '../config';

interface ChopsticksIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ChopsticksIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/chopsticks)
 * @see {@link https://clicons.dev/icon/chopsticks}
 */
const ChopsticksIcon = React.forwardRef<SVGSVGElement, ChopsticksIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.4548 9.76893L18.1572 11.4713M13.7311 8.04518L12.0287 6.34283M20.5523 7.05701L21.2095 7.71427C21.6057 8.11046 21.5952 8.75196 21.1865 9.12111L8.30613 20.7545C7.92529 21.0985 7.33645 21.0787 6.96729 20.7095L6.93352 20.6758C6.55091 20.2932 6.54562 19.6781 6.92169 19.3021L19.1786 7.04518C19.5546 6.6691 20.1697 6.6744 20.5523 7.05701ZM16.443 3.94772L15.7857 3.29045C15.3895 2.89426 14.748 2.90477 14.3789 3.3135L2.74549 16.1939C2.40152 16.5747 2.4213 17.1636 2.79046 17.5327L2.82423 17.5665C3.20683 17.9491 3.82186 17.9544 4.19793 17.5783L16.4548 5.32142C16.8309 4.94535 16.8256 4.33032 16.443 3.94772Z'
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

ChopsticksIcon.displayName = 'ChopsticksIcon';
export default ChopsticksIcon;
