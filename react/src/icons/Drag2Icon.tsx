import React from 'react';
import config from '../config';

interface Drag2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Drag2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/drag2)
 * @see {@link https://clicons.dev/icon/drag2}
 */
const Drag2Icon = React.forwardRef<SVGSVGElement, Drag2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.492 16.7708L8.7397 16.528C9.30111 15.9779 9.62089 15.2262 9.62853 14.4387L9.67839 9.29499C9.68515 8.5976 9.9101 7.86083 10.5428 7.57149C11.4996 7.13391 12.6822 7.38098 12.8952 9.42674L13.2233 11.1555L18.8027 4.45497C19.9702 3.35338 22.0426 4.74594 21.1388 6.47149L17.8575 10.4213C19.1379 11.2814 23.8618 16.1719 20.0362 18.6611C19.4845 19.1418 18.1777 19.839 17.0378 20.2016C15.951 20.5474 15.2689 21.7309 14.9345 22.0003'
    }
  ],
  [
    'path',
    {
      d: 'M9.48367 3.51398C9.48367 4.35006 10.1351 5.02784 10.9386 5.02784C11.7422 5.02784 12.3936 4.35006 12.3936 3.51398C12.3936 2.6779 11.7422 2.00012 10.9386 2.00012C10.1351 2.00012 9.48367 2.6779 9.48367 3.51398ZM9.48367 3.51398H8.8398L8.0692 3.58624M3.98952 8.94285C4.82649 8.9291 5.4637 9.58457 5.47696 10.3961C5.49021 11.2077 4.86737 11.9061 4.0304 11.9198C3.19343 11.9336 2.51131 11.2487 2.49806 10.4372C2.4848 9.62562 3.15255 8.95659 3.98952 8.94285ZM3.98952 8.94285L4.07917 7.60966M5.77439 4.65096L5.44659 4.9579L5.15694 5.27066'
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

Drag2Icon.displayName = 'Drag2Icon';
export default Drag2Icon;
