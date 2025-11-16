import React from 'react';
import config from '../config';

interface BlushBrushIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BlushBrushIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/blush-brush)
 * @see {@link https://clicons.dev/icon/blush-brush}
 */
const BlushBrushIcon = React.forwardRef<SVGSVGElement, BlushBrushIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.06505 11.0322L2.8836 12.8234C0.435955 13.7381 3.73502 17.9574 4.82985 19.0466C5.92467 20.1359 10.3317 23.5832 11.2511 21.1481L12.9942 15.9361M3.23407 16.49L5.93576 15.1122M7.63912 20.4976L8.89322 18.0545'
    }
  ],
  [
    'path',
    {
      d: 'M12.6264 8.24924L13.6286 7.25217C14.0229 6.85992 14.7109 6.93348 15.1052 7.32572L16.6694 8.8819C17.0636 9.27415 17.0636 9.9101 16.6694 10.3023L15.6671 11.2994C15.3716 11.5934 15.1751 11.9714 15.1046 12.3812L14.6101 15.2579C14.472 16.0612 13.4804 16.3751 12.9011 15.7988L8.36308 11.0114C7.78382 10.4351 7.88891 9.51181 8.69639 9.37441L11.5878 8.88241C11.9998 8.81232 12.3309 8.54324 12.6264 8.24924Z'
    }
  ],
  [
    'path',
    {
      d: 'M16.9446 9.00217L21.5271 4.26023C22.8841 2.91024 21.0186 1.16009 19.7192 2.45293L14.9254 6.99335'
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

BlushBrushIcon.displayName = 'BlushBrushIcon';
export default BlushBrushIcon;
