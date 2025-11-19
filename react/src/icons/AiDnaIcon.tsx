import React from 'react';
import config from '../config';

interface AiDnaIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AiDnaIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ai-dna)
 * @see {@link https://clicons.dev/icon/ai-dna}
 */
const AiDnaIcon = React.forwardRef<SVGSVGElement, AiDnaIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.49115 14.0016C3.00095 11.6016 3.00095 10.4016 3.00095 10.0016C3.00095 9.60159 3.00095 8.40159 7.49115 6.00159M7.49115 14.0016C3.00095 16.4016 3.00008 17.2016 3.00008 18.0016M7.49115 14.0016C11.9805 11.6021 11.9805 10.4021 11.9805 10.0018C11.9805 9.60159 11.9805 8.40112 7.49115 6.00159M7.49115 6.00159C11.9814 3.60159 11.9814 2.80159 11.9814 2.00159M7.49115 6.00159L5.30789 4.74589C3.00065 3.28308 3.00008 2.64234 3.00008 2.00159'
    }
  ],
  [
    'path',
    {
      d: 'M14.4119 12.0006V13.9796M10.9249 15.501H12.9769M18.9479 15.501H20.9999M18.9479 18.4742H20.9999M10.9249 18.4742H12.9769M14.4119 20.0198V21.9989M17.4374 20.0198V21.9989M17.4266 12.0006V13.9796M13.9769 19.9682H17.9479C18.5002 19.9682 18.9479 19.5205 18.9479 18.9682V14.9796C18.9479 14.4273 18.5002 13.9796 17.9479 13.9796H13.9769C13.4246 13.9796 12.9769 14.4273 12.9769 14.9796V18.9682C12.9769 19.5205 13.4246 19.9682 13.9769 19.9682Z'
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

AiDnaIcon.displayName = 'AiDnaIcon';
export default AiDnaIcon;
