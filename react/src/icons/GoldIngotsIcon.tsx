import React from 'react';
import config from '../config';

interface GoldIngotsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GoldIngotsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/gold-ingots)
 * @see {@link https://clicons.dev/icon/gold-ingots}
 */
const GoldIngotsIcon = React.forwardRef<SVGSVGElement, GoldIngotsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.26934 15.084C3.9629 13.6266 4.30968 12.8978 4.91395 12.4765C4.96276 12.4425 5.01259 12.4101 5.06338 12.3795C5.69228 12 6.46152 12 8 12C9.53848 12 10.3077 12 10.9366 12.3795C10.9874 12.4101 11.0372 12.4425 11.086 12.4765C11.6903 12.8978 12.0371 13.6266 12.7307 15.084C13.7648 17.2572 14.2819 18.3438 13.8433 19.1425C13.8268 19.1724 13.8095 19.2018 13.7914 19.2306C13.3077 20 12.1613 20 9.86867 20H6.13133C3.83865 20 2.69231 20 2.20859 19.2306C2.19046 19.2018 2.17317 19.1724 2.15674 19.1425C1.71814 18.3438 2.23521 17.2572 3.26934 15.084Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.5469 12.0207C14.9432 12 15.4158 12 15.9989 12C17.5374 12 18.3067 12 18.9356 12.3795C18.9863 12.4101 19.0362 12.4425 19.085 12.4765C19.6893 12.8978 20.036 13.6266 20.7296 15.084C21.7637 17.2572 22.2808 18.3438 21.8422 19.1425C21.8258 19.1724 21.8085 19.2018 21.7904 19.2306C21.3066 20 20.1603 20 17.8676 20H16.7391'
    }
  ],
  [
    'path',
    {
      d: 'M17.6073 9C17.3909 8.47153 17.0924 7.84427 16.7306 7.08405C16.0371 5.62657 15.6903 4.89783 15.086 4.4765C15.0372 4.44247 14.9874 4.41011 14.9366 4.37946C14.3077 4 13.5385 4 12 4C10.4615 4 9.69227 4 9.06337 4.37946C9.01257 4.41011 8.96274 4.44247 8.91394 4.4765C8.30967 4.89783 7.96289 5.62657 7.26933 7.08405C6.90756 7.84427 6.60907 8.47153 6.39264 9'
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

GoldIngotsIcon.displayName = 'GoldIngotsIcon';
export default GoldIngotsIcon;
