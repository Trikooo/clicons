import React from 'react';
import config from '../config';

interface Tap3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Tap3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tap3)
 * @see {@link https://clicons.dev/icon/tap3}
 */
const Tap3Icon = React.forwardRef<SVGSVGElement, Tap3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.70235 13.1617L8.71072 14.8945V6.15789C8.71072 5.24227 9.44813 4.5 10.3578 4.5C11.2674 4.5 12.0048 5.24226 12.0048 6.15789V10.6314L14.817 11.0838C16.6321 11.3579 17.5397 11.4949 18.179 11.8804C19.235 12.5172 20 13.4735 20 14.8695C20 15.8419 19.7612 16.4942 19.1808 18.247C18.8125 19.3591 18.6284 19.9152 18.3281 20.3554C17.8337 21.0801 17.1043 21.6093 16.2649 21.8522C15.7551 21.9998 15.1728 21.9998 14.0081 21.9998H13.0209C11.4725 21.9998 10.6983 21.9998 10.0091 21.7138C9.88545 21.6625 9.76465 21.6046 9.64717 21.5404C8.99204 21.1823 8.50384 20.5775 7.52744 19.3679L4.3665 15.4519C3.88077 14.8501 3.87753 13.9889 4.35872 13.3835C4.93708 12.6557 5.99941 12.5552 6.70235 13.1617Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.3164 6C14.3164 3.79086 12.5255 2 10.3164 2C8.10727 2 6.31641 3.79086 6.31641 6'
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

Tap3Icon.displayName = 'Tap3Icon';
export default Tap3Icon;
