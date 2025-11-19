import React from 'react';
import config from '../config';

interface SubmarineIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SubmarineIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/submarine)
 * @see {@link https://clicons.dev/icon/submarine}
 */
const SubmarineIcon = React.forwardRef<SVGSVGElement, SubmarineIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19 12H9.64103C8.665 12 7.68502 12.85 6.87882 13.3085C6.53595 13.5035 6.36451 13.601 6.20707 13.5706C6.04963 13.5401 5.88565 13.35 5.55769 12.9698C4.87109 12.1737 4.12853 12 3 12C2.44772 12 2 12.5223 2 13.1667V17.8333C2 18.4777 2.44772 19 3 19C4.12854 19 4.87109 18.8263 5.55769 18.0302C5.88565 17.65 6.04963 17.4599 6.20707 17.4294C6.36451 17.399 6.53595 17.4965 6.87882 17.6915C7.68502 18.15 8.665 19 9.64102 19H19C20.6569 19 22 17.433 22 15.5C22 13.567 20.6569 12 19 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 12L11.0594 10.7635C11.4467 9.90726 11.6404 9.47914 12.0117 9.23957C12.383 9 12.8529 9 13.7927 9H14.2073C15.1471 9 15.617 9 15.9883 9.23957C16.3596 9.47914 16.5533 9.90726 16.9406 10.7635L17.5 12'
    }
  ],
  [
    'path',
    {
      d: 'M14 9V5C14 4.44772 14.4477 4 15 4H16'
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

SubmarineIcon.displayName = 'SubmarineIcon';
export default SubmarineIcon;
