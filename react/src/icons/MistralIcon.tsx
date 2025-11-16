import React from 'react';
import config from '../config';

interface MistralIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MistralIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mistral)
 * @see {@link https://clicons.dev/icon/mistral}
 */
const MistralIcon = React.forwardRef<SVGSVGElement, MistralIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.5 16.5V18.5C10.5 19.0523 10.0523 19.5 9.5 19.5H2.5C1.94772 19.5 1.5 19.0523 1.5 18.5V17.5C1.5 16.9477 1.94772 16.5 2.5 16.5H3.5C4.05228 16.5 4.5 16.0523 4.5 15.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H6.5C7.05228 4.5 7.5 4.94772 7.5 5.5V6.5C7.5 7.05228 7.94772 7.5 8.5 7.5H9.5C10.0523 7.5 10.5 7.94772 10.5 8.5V9.5C10.5 10.0523 10.9477 10.5 11.5 10.5H12.5C13.0523 10.5 13.5 10.0523 13.5 9.5V8.5C13.5 7.94772 13.9477 7.5 14.5 7.5H15.5C16.0523 7.5 16.5 7.05228 16.5 6.5V5.5C16.5 4.94772 16.9477 4.5 17.5 4.5H18.5C19.0523 4.5 19.5 4.94772 19.5 5.5V15.5C19.5 16.0523 19.9477 16.5 20.5 16.5H21.5C22.0523 16.5 22.5 16.9477 22.5 17.5V18.5C22.5 19.0523 22.0523 19.5 21.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5V16.5M10.5 16.5H13.5M10.5 16.5H8.5C7.94772 16.5 7.5 16.0523 7.5 15.5V14.5C7.5 13.9477 7.94772 13.5 8.5 13.5H9.5C10.0523 13.5 10.5 13.9477 10.5 14.5V16.5ZM13.5 16.5H15.5C16.0523 16.5 16.5 16.0523 16.5 15.5V14.5C16.5 13.9477 16.0523 13.5 15.5 13.5H14.5C13.9477 13.5 13.5 13.9477 13.5 14.5V16.5Z'
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

MistralIcon.displayName = 'MistralIcon';
export default MistralIcon;
