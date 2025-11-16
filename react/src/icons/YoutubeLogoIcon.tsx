import React from 'react';
import config from '../config';

interface YoutubeLogoIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
}

/**
 * @name YoutubeLogoIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/youtube-logo)
 * @see {@link https://clicons.dev/icon/youtube-logo}
 */
const YoutubeLogoIcon = React.forwardRef<SVGSVGElement, YoutubeLogoIconProps>(
  ({ size, color, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';

    const iconData = [
  [
    'path',
    {
      d: 'M16.86 7s-.14-.97-.56-1.4c-.53-.56-1.13-.56-1.4-.6-1.96-.14-4.9-.14-4.9-.14s-2.94 0-4.9.14c-.28.04-.87.04-1.4.6-.43.43-.56 1.4-.56 1.4s-.14 1.14-.14 2.28v1.07c0 1.14.14 2.28.14 2.28s.14.98.55 1.4c.54.56 1.24.55 1.55.6 1.12.11 4.76.15 4.76.15s2.94 0 4.9-.15c.27-.03.87-.04 1.4-.6.42-.42.56-1.4.56-1.4s.14-1.14.14-2.28v-1.07c0-1.14-.14-2.28-.14-2.28Zm-8.31 4.65v-3.96l3.78 1.98-3.78 1.98Z'
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
        if (!processedAttrs.fill) processedAttrs.fill = finalColor;
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
        viewBox="0 0 20 20"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

YoutubeLogoIcon.displayName = 'YoutubeLogoIcon';
export default YoutubeLogoIcon;
